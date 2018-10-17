module.exports.mainGoals = () => {
    return ({
        ranges: [
            {
                value: 'NewProduct',
                label: 'Launch a New Product',
            },
            {
                value: 'NewMarket',
                label: 'Enter a New Market',
            },
            {
                value: 'NewAudience',
                label: 'Target a New Audience',
            },
            {
                value: 'CreateContent',
                label: 'Create Content',
            },
            {
                value: 'User Acquisition',
                label: 'User Acquisition',
            },
            {
                value: 'CreateLeads',
                label: 'Create Leads',
            },
            {
                value: 'BusinessDevelopment',
                label: 'Business Development',
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
                value: 'SocialCampaign',
                label: 'Social Campaign',
            },
            {
                value: 'MediaCampaign',
                label: 'Media Campaign',
            },
            {
                value: 'Event',
                label: 'Event',
            },
            {
                value: 'Sponsership',
                label: 'Sponsership',
            },
            {
                value: 'LongTerm',
                label: 'Long Term Strategic coope',
            },
            {
                value: 'Other',
                label: 'Other',
            }
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

module.exports.budget = () => {
    return ({
        ranges: [
            {
                value: '1000',
                label: '0-1000$',
            },
            {
                value: '10000',
                label: '1001-10000$',
            },
            {
                value: '100000',
                label: '10000$ +',
            },
        ],
        title: "What is your busget?",
        adornment: ""
    });
}
