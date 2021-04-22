/// <reference types="react-scripts" />

declare namespace NodeJS {
    interface ProcessEnv {
        NODE_ENV: 'development' | 'production' | 'test'
        REACT_APP_EMAILJS_SERVICEID: string
        REACT_APP_EMAILJS_TEMPLATEID: string
        REACT_APP_EMAILJS_USERID: string
        REACT_APP_EMAILJS_ACCESSTOKEN: string
    }
}