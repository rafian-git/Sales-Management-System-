module.exports = {
	category: {
		create: {
			name: {required: true, message: 'Name cannot be empty'},
			desc: {required: true}
		},
		edit: {
			name: {required: true},
			desc: {required: true}
		}
	},
	product: {
		create: {
		pn: {required: true, message: 'Name cannot be empty'},
		// desc: {required: true}
	},
	edit: {
	pn: {required: true, message: 'Name cannot be empty'},
		// desc: {required: true}
	}
},
register: {
	index: {
	fn: {required: true, message: 'Full Name must be given', type: String},
	un: {required: true, message: 'Username must be given'},
	sn: {required: true, message: 'Shop Name must be given'},
	mail: {required: true, message: 'Email must be given'},
	pw: {required: true, message: 'Password must be given'}
}
},

login: {
	username: {required: true, message: 'Username must be given'}, 
	password: {required: true, message: 'Password must be given'}
},
	user: {}
};
