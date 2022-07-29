import {configureStore} from '@reduxjs/toolkit';
import appointmentReducer from '../reducers/appointmentReducer';
import authReducer from '../reducers/authReducer';


export const store = configureStore({
    reducer:{
        auth: authReducer,
        appointment: appointmentReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch