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
        adornment: ""
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
        adornment: ""
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
        adornment: ""
    });
}

module.exports.achieve = () => {
    return ({
        ranges: [
            {
                value: 'BrandAwareness',
                label: 'Brand Awareness',
                checked: true,
            },
            {
                value: 'BrandImage',
                label: 'Brand Image',
                checked: false,
            },
            {
                value: 'IncreaseSales',
                label: 'Increase Sales',
                checked: false,
            },
            {
                value: 'IncreaseCostumerLoyality',
                label: 'Increase Costumer Loyality',
                checked: false,
            },
            {
                value: 'Other',
                label: 'Other',
                checked: false,
            },
        ],
        title: "What do you want to achieve?",
        error: "Please check at least 1 achievement",
        adornment: ""
    });
}

