import express from 'express'

let auth = async (req, res, next) => {
    next();
}

export default auth;