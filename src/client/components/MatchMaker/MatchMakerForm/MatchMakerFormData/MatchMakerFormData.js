module.exports.mainGoals = () => {
    return ({
        ranges: [
            {
                value: 'Branding',
                label: 'Branding',
            },
            {
                value: 'NewProduct',
                label: 'Launch New Product',
            },
        ],
        title: "What do you want to do?",
        adornment : ""
    });
}

module.exports.how = () => {
    return ({
        ranges: [
            {
                value: 'SocialMarketing',
                label: 'Social Marketing',
            },
        ],
        title: "How?",
        adornment : ""
    });
}

module.exports.where = () => {
    return ({
        ranges: [
            {
                value: 'IL',
                label: 'Israel',
            },
            {
                value: 'UK',
                label: 'England',
            },
        ],
        title: "Where?",
        adornment : ""
    });
}


