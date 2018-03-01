import { IAppState } from './IAppState';
import { IExercise,ISession } from '../models';
import { GET_EXERCISES } from '../exercise-list/exercise-list.actions';

//Initial State before implementing calls to Api
const InitialExercises:IExercise[] =
[{
            "id": 1,
            "name": "Seat Up"
        },
        {
            "id": 1,
            "name": "Seat Up"
        },
        ];
const InitialSessions : ISession[] =
[
                    {
                        date: new Date("01012017") ,
                        gym: "home",
                        exercises: [
                            {
                                exercise: {
                                    id: 1,
                                    name: "Seat Up"
                                },
                                repetitions: [10, 10, 8],
                                restPeriod: 30,
                                weight:70
                            }
                        ]
                    }
                    ];

const InitialState: IAppState =
    {
        exercises: InitialExercises,
        users: [
            {
                id:1,
                userName: "Jose",
                lastName:"Sanchez",
                birthday: new Date("07/07/1984"),
                password:"000000",
                sessions: InitialSessions,       
            }
            ]

    }
//---------------------------------------------------

function storeExercises(state,action):IAppState
{
   // return InitialState;
    return Object.assign({},state,{
        exercises:action.exercises

    })
}
export function reducer(state=InitialState,action){
    switch(action.type){
       case GET_EXERCISES:
        return storeExercises(state,action);
        default:
        return state;
    }
}