const {errorMessages, successMessages} = require('../data/messages')
const stats = require('../stats.json')

class ListingService {
    async getAllViewsById (autoId) {
        try {
            const data = stats.find((s) => s.autoId === autoId);
            if (!data) {
                return { message: errorMessages.noRecordFound, status: false };
            }
            return {
                statistics: data,
                status: true
            }
        } catch (e) {
            throw new Error(errorMessages.somethingWentWrong);
        }
    }

    async getListingViewsById (autoId) {
        try {
            const data = stats.find((s) => s.autoId === autoId)
            if (!data) {
                return { message: errorMessages.noRecordFound, status: false };
            }
            const statistics = {
                autoId,
                listingViews: data.listingViews
            }
            return {
                statistics,
                status: true
            }
        } catch(e) {
            console.log(e)
            throw new Error(errorMessages.somethingWentWrong)
        }
    }

    async getPhoneViewsById (autoId) {
        try {
            const data = stats.find((s) => s.autoId === autoId)
            if (!data) {
                return { message: errorMessages.noRecordFound, status: false };
            }
            const statistics = {
                autoId,
                phoneViews: data.phoneViews
            }
            return {
                statistics,
                status: true
            }
        } catch(e) {
            console.log(e)
            throw new Error(errorMessages.somethingWentWrong)
        }
    }

    async addListingView (autoId) {
        try {
            const data = stats.find((s) => s.autoId === autoId);
            if (!data) {
                return { message: errorMessages.noRecordFound, status: false };
            } 
            data.listingViews++
            return {status: true}
        } catch (error) {
            throw new Error(errorMessages.somethingWentWrong)
        }
    }

    async addPhoneView (autoId) {
        try {
            const data = stats.find((s) => s.autoId === autoId);
            if (!data) {
                return { message: errorMessages.noRecordFound, status: false };
            } 
            data.phoneViews++
            return {status: true}
        } catch (error) {
            throw new Error(errorMessages.somethingWentWrong)
        }
    }
}

module.exports = new ListingService()