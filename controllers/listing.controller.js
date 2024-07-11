const listingService = require('../services/listing.service')
const {errorMessages, successMessages} = require('../data/messages')

class ListingController {

    async getAllViewsById (ctx) {
        try {
            const {autoId} = ctx.params
            const changeType = Number(autoId)
            if (isNaN(changeType)) {
                ctx.status = 400;
                ctx.body = { message: errorMessages.validationError };
                return;
            }
            const data = await listingService.getAllViewsById(changeType)
            if (!data.status) {
                ctx.status = 404;
                ctx.body = { message: data?.message};
                return;
            }
            ctx.body = data.statistics
        } catch (e) {
            console.log(e)
            ctx.status = 500;
            ctx.body = { message: errorMessages.somethingWentWrong };
            return;
        }
    }

    async addListingView (ctx) {
        try {
            const {autoId} = ctx.request.body
            if (typeof autoId !== "number") {
                ctx.status = 400;
                ctx.body = { message: errorMessages.validationError };
                return;
            }
            const data = await listingService.addListingView(autoId)
            if(!data.status) {
                ctx.status = 404;
                ctx.body = { message: data?.message};
                return;
            }
            ctx.status = 200;
            ctx.body = { message: successMessages.viewAdded }
        } catch(e) {
            console.log(e)
            ctx.status = 500;
            ctx.body = { message: errorMessages.somethingWentWrong };
            return;
        }
    }

    async addPhoneView (ctx) {
        try {
            const {autoId} = ctx.request.body
            if (typeof autoId !== "number") {
                ctx.status = 400;
                ctx.body = { message: errorMessages.validationError };
                return;
            }
            const data = await listingService.addPhoneView(autoId)
            if(!data.status) {
                ctx.status = 404;
                ctx.body = { message: data?.message};
                return;
            }
            ctx.status = 200;
            ctx.body = { message: successMessages.viewAdded }
        } catch(e) {
            console.log(e)
            ctx.status = 500;
            ctx.body = { message: errorMessages.somethingWentWrong };
            return;
        }
    }
}

module.exports = new ListingController()