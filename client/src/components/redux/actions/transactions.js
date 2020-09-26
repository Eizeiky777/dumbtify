import { TRANSACTION } from "../constants/action-types";
import { API, setAuthToken } from "../config/api";
import moment from 'moment';

export const postTransaction = (dataSnaps,idUser) => {
    return {
        type: TRANSACTION,
        payload: async () => {
        try {
            setAuthToken( localStorage.getItem("token") );
            
            var currentDate = moment(currentDate);
            var futureMonth = moment(currentDate).add(1, 'M');
            // var futureMonthEnd = moment(futureMonth).endOf('month');
            // if(currentDate.date() != futureMonth.date() && futureMonth.isSame(futureMonthEnd.format('YYYY-MM-DD'))) {
            //     futureMonth = futureMonth.add(1, 'd');
            // }
            const proceedSnaps = {
                "startDate": currentDate,
                "dueDate": futureMonth,
                "userId": idUser,
                "attach": "success",
                "status": "Pending",
                "snaps": dataSnaps
            }

            const {
            data: { data },
            } = await API.post("/transaction/add", proceedSnaps);
                
            return data;
        } catch (error) {
            if (error.response) {
            const { data, status } = error.response;

            if (status > 399) throw data.error;
            }
        }
        },
    };
};
