import { reactive } from 'vue';

export const store = reactive({
    contactUs: [
        {
            icon: 'fas', 
            icon2:'location-dot',
            text: '900 Wood Street, MI New York48607',
            src: '#'
        },

        {
            icon: 'fas', 
            icon2: 'square-phone',
            text: '56 345 678 0000-09',
            src: '#'
        },

        {
            icon: 'fas', 
            icon2: 'envelope',
            text: 'info@example.com',
            src: '#'
        }
    ], 

    supportUs: [
        {
            icon: 'fas', 
            icon2:'angle-right',
            text: 'Privacy',
            src: '#'
        },

        {
            icon: 'fas', 
            icon2:'angle-right',
            text: 'Terms',
            src: '#'
        },

        {
            icon: 'fas', 
            icon2:'angle-right',
            text: 'Cookie Policy',
            src: '#'
        },

        {
            icon: 'fas', 
            icon2:'angle-right',
            text: 'Sitemap',
            src: '#'
        }
    ],

    explore: [
        {
            icon: 'fas', 
            icon2:'angle-right',
            text: 'Accomodation',
            src: '#'
        },

        {
            icon: 'fas', 
            icon2:'angle-right',
            text: 'Arts Academics',
            src: '#'
        },

        {
            icon: 'fas', 
            icon2:'angle-right',
            text: 'Central Services',
            src: '#'
        },

        {
            icon: 'fas', 
            icon2:'angle-right',
            text: 'Conferences and Events',
            src: '#'
        },

        {
            icon: 'fas', 
            icon2:'angle-right',
            text: 'Food and Drink',
            src: '#'
        }
    ],

    visit: [
        {
            icon: 'fas', 
            icon2:'angle-right',
            text: 'Admission',
            src: '#'
        },

        {
            icon: 'fas', 
            icon2:'angle-right',
            text: 'Contact Us',
            src: '#'
        },

        {
            icon: 'fas', 
            icon2:'angle-right',
            text: 'FAQs',
            src: '#'
        },

        {
            icon: 'fas', 
            icon2:'angle-right',
            text: 'Request Information',
            src: '#'
        },

        {
            icon: 'fas', 
            icon2:'angle-right',
            text: 'Privacy Notice',
            src: '#'
        }
    ],

    finalVoices: [
        {
            text: 'Privacy'
        },

        {
            text: 'Terms'
        },

        {
            text: 'Cookie Policy'
        },

        {
            text: 'Sitemap'
        }
    ]

})