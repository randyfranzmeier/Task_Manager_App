const AsyncWrapper = (fct) => {
    return async(req, res, next) => {
        try {
            await fct(req, res, next)
        }
        catch (err) {
            next(err)
        }
    }
}
module.exports = AsyncWrapper