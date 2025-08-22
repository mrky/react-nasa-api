module.exports = {
    /**
     * Format the date using the en-GB locale
     * @param {string} date 
     * @returns {string} Date in en-GB format, or the original string if the input 
     * date is not a valid date
     */
    formatDate: function(date) {
        const dateFormatted = new Date(date).toLocaleDateString('en-GB');

        if (dateFormatted === 'Invalid Date') {
            return date;
        }

        return dateFormatted;
    }
};