import * as firebase from 'firebase'

const firebaseActions = {
    async login(email, password) {
        try {
            const response = await firebase.auth().signInWithEmailAndPassword(email, password)
            return Promise.resolve(response);
        } catch (error) {
            console.log("Error login the user")
            return Promise.reject(error);
        }
    },

    async logout() {
        try {
            const response = await firebase.auth().signOut()
            return Promise.resolve(response);
        } catch (error) {
            console.log("Error at logout")
            return Promise.reject(error);
        }
    },
    async getPicture(filename, ref) {
        try {
            const response = await firebase.storage().ref(ref).child(filename).getDownloadURL()
            return Promise.resolve(response);
        } catch (error) {
            console.log("Error retrieving the picture from firebase")
            return Promise.reject(error);
        }
    },

    async postPicture(file, ref) {
        try {
            const response = await firebase.storage().ref(ref).put(file)
            return Promise.resolve(response);
        } catch (error) {
            console.log("Error uploading the picture from firebase")
            return Promise.reject(error);
        }
    },

    async signUp(email, password) {
        try {
            const response = await firebase.auth().createUserWithEmailAndPassword(email, password)
            return Promise.resolve(response);
        } catch (error) {
            console.log("Error login the user")
            return Promise.reject(error);
        }
    },

    async deleteUser() {
        try {
            const response = firebase.auth().currentUser.delete()
            return Promise.resolve(response);
        } catch (error) {
            console.log("Error when deleting the user")
            return Promise.reject(error);
        }
    }
}

export default firebaseActions;
