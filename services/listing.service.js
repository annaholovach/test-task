const {errorMessages, successMessages} = require('../data/messages')
const stats = require('../stats.json')

class ListingService {
    async getAllViewsById (autoId) {
        try {
            const data = stats.find((s) => s.autoId === autoId);
            if (!data) {
                return { message: errorMessages.noRecordFound, status: false };
            }
            data.summaryStatistics = data.listingViews + data.phoneViews
            return {
                statistics: data,
                status: true
            }
        } catch (e) {
            throw new Error(errorMessages.somethingWentWrong);
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