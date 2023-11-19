const router = require('express').Router()
const {
	usersignup,
	usersignin,
	addToCard,
	increaseCardCount,
	decreaseCardCount,
	uploadProfilePhoto,
	// adminSignIn,
	updateUser,
	getUserData,
	getCardList,
	getAuthData
} = require('../Controllers/usercontroller.js')

//get user
router.get('/:id', getUserData)

//get user by token
router.get('/userData/:token', getAuthData)

// user sign up
router.post('/signup', usersignup)

//user sign in
router.post('/signin', usersignin)

//add item into card
router.get('/card/:uid/:pid', addToCard)

//increase item into card
router.put('/increase/:uid/:pid', increaseCardCount)

//decrease item into card
router.put('/decrease/:uid/:pid', decreaseCardCount)

//upload profile image
router.put('/uploadPhoto/:uid', uploadProfilePhoto)

//admin sign in
// router.post('/admin-signin', adminSignIn);

//user update profile
router.put('/:id', updateUser)

//get user card
router.get('/card/:id', getCardList)

// //user delete profile
// router.delete('/:id', deleteUser);

// //find all users
// router.get('/view', fetchAll);

// //find one user
// router.get('/:id', fetchOne);

//follow user
// router.put('/:id/follow', followUser);

//follow user
// router.put('/:id/unfollow', unFollowUser);

// users
// router.get('/', getUsers);

// //update points
// router.put('/:id/changePoints', changePoints);
// router.put('/:id/activation', Activation);

// // request
// router.get('/:id/request',getRequests)
// router.put('/:id/updatePassword',updatePassword)
// router.put("/:id/followRequest",userRequest)
// router.put("/:id/useAcceptance",userAcceptance)
// router.put("/:id/rejectUser",userRejectRequest)

// // forgot password
// router.post("/forgot-password", forgotPassword)
// router.put('/reset-password/:resetPasswordToken', resetPassword);

//admin image uploading
// router.put('/:id/profilePic',adminImageUpload)
// router.put('/:id/updateAdmin',updateAdmin)

// invite new friend
// router.post("/invite-new-friend", inviteNewFriend)

module.exports = router
