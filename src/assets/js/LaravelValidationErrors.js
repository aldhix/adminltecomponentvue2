export const LaravelValidationErrors = {
    dataErrors: null,
    message(prop) {
        if (
            this.has(prop) &&
            typeof this.dataErrors == "object" &&
            this.dataErrors !== null
        ) {
            return this.dataErrors[prop][0];
        }
        return "";
    },
    has(prop) {
        if (typeof this.dataErrors == "object" && this.dataErrors !== null) {
            return this.dataErrors.hasOwnProperty(prop);
        }
        return false;
    },
};

export default LaravelValidationErrors;
