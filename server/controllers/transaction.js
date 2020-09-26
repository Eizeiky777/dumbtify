
const { v4: uuidv4 } = require('uuid');
const { Transaction } = require("../models");
const { User } = require("../models");
const { validationResult } = require('express-validator'); //form validation
// const { matchedData, sanitize } = require('express-validator/filter'); //sanitize form params
const midtransClient = require('midtrans-client');

appError = (res, statusCode, message) => {

    res.send({ data: [{ status: 'error', message}]  });
};

exports.read = async (req, res) => {
try {
    const transactions = await Transaction.findAll({
        include: {
            model: User,
            attributes: {
                exclude: ["createdAt","updatedAt","userId"]
            },
        },
        attributes: {
            exclude: ["createdAt","updatedAt","CategoryId","userId","UserId"]
        }
    });

    res.send({ data: transactions });
} catch (error) {
    console.log(error);
}
};
exports.readMore = async (req, res) => {
    try {
        const { userId } = req.params;
        
        const transactions = await Transaction.findAll({
            where: {
                userId: userId
            },
            include: {
                model: User,
                attributes: {
                    exclude: ["createdAt","updatedAt","userId"]
                },
            },
            attributes: {
                exclude: ["createdAt","updatedAt","CategoryId","userId","UserId"]
            }
        });
        
        if (!Array.isArray(transactions) || !transactions.length) {
            // appError(res, 400, `No data matches with your request`);
            res.send({ data: transactions, error: "error" });
        }else{
            res.send({ data: transactions });
        }

    } catch (error) {
        console.log(error);
    }
    };
///////////////////////////////////////////////////////////////////////////////////////
////// MIDTRANS
///////////////////////////////////////////////////////////////////////////////////////
exports.createToken = async (req, res) => {
    // initialize snap client object
    let snap = new midtransClient.Snap({
        isProduction : false,
        serverKey : 'SB-Mid-server-L3nvLRCOJrujV_fA_fCjngzt',
        clientKey : 'SB-Mid-client-skAFA8h6Foiyuc1r'
    });
    
    let rand_order_id = uuidv4()
    let parameter = {
        "transaction_details": {
            "order_id": `dumbtify-${rand_order_id}`,
            "gross_amount": parseInt(req.params.price)
        }, "credit_card":{
            "secure" : true
        }
    };
    
    snap.createTransaction(parameter)
        .then((transaction)=>{
            let transactionToken = transaction.token;
            console.log('transactionToken:',transactionToken);
            res.json({token:transactionToken})
        })
}
exports.create = async (req, res) => {
    const { startDate, dueDate, userId, status, attach, snaps } = req.body
    
    const UserX = await User.findOne({
        where: {
            id: userId
        },
        attributes: {
            exclude: ["createdAt","updatedAt","userId","UserId","password"]
        }
    });

    
    Transaction.create({
        startDate,
        dueDate,
        userId,
        status,
        attach,
        snaps
    }).then(newTransaction => {
        UserX.subscribe = 1
        UserX.save()
        res.send({ data:{
            "startDate": newTransaction.startDate,
            "dueDate": newTransaction.dueDate,
            "userId": UserX,
            "status":  newTransaction.status,
            "snaps": newTransaction.snaps
        }})
    })
}

//////////////////////////////////////////////////////////////////////////////////////
// Detail Transaction
exports.readOne = async (req, res) => {
try {
    const { idTransaction } = req.params;
    const userX = await Transaction.findOne({
        where: {
            id: idTransaction
        },
        include: {
            model: User,
            attributes: {
                exclude: ["createdAt","updatedAt","userId"]
            },
        },
        attributes: {
            exclude: ["createdAt","updatedAt","CategoryId", "userId","UserId"]
        }
    });

    res.send({ data: userX });
} catch (error) {
    console.log(error);
}
};
// PATCH / Update Transaction
exports.update = async (req, res) => {
    try {
        const { idTransaction } = req.params;
        const userX = await Transaction.findOne({
            where: {
                id: idTransaction
            },
            include: {
                model: User,
                attributes: {
                    exclude: ["createdAt","updatedAt","userId"]
                },
            },
            attributes: {
                exclude: ["createdAt","updatedAt","UserId","userId"]
            }
        });

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.mapped() });
        }

        userX.startDate = req.body.startDate;
        userX.dueDate = req.body.dueDate;
        userX.userId = req.body.userId;
        userX.status = req.body.status;
        userX.attach = req.body.attach;
        userX.snaps = req.body.snaps;

        const userSubscribe = await User.findOne({
            where: {
                id: userX.userId
            },
            attributes: {
                exclude: ["createdAt","updatedAt","UserId","userId"]
            }
        });

        if (userX.status === 'Approved'){
            userSubscribe.subscribe = 1
        }else{
            userSubscribe.subscribe = 0
        }

        await userSubscribe.save();
        await userX.save();

        const userY = await Transaction.findOne({
            where: {
                id: idTransaction
            },
            include: {
                model: User,
                attributes: {
                    exclude: ["createdAt","updatedAt","userId","password"]
                },
            },
            attributes: {
                exclude: ["createdAt","updatedAt","UserId","userId"]
            }
        });

        res.send({ data: userY });
    } catch (error) {
        console.log(error);
    }
    };
// DELETE FILM
exports.delete = async (req, res) => {
try {
    const { idTransaction } = req.params;

    const userX = await Transaction.findOne({
        where: {
            id: idTransaction
        },
        attributes: {
            exclude: ["createdAt","updatedAt","attache","status","startDate","dueDate","UserId","userId"]
        }
    });

    const transactionX = await Transaction.destroy({
        where: {
            id: idTransaction
        }
    });

    res.send({ data: userX });
} catch (error){
        console.log(error);
    }
};
