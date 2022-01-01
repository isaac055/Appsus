import { storageService } from './storage.service.js'
import { utilService } from '../../../services/util.service.js'

export const emailService = {
    query,
    removeEmail,
    markedAsRead,
    _addEmail,
    getEmailById,

}


const KEY = 'emailDB';

const loggedInUser = {
    email: 'user@appsus.com',
    fullname: 'Mahatma Appsus'
}
_createEmails();

function query(filterBy = null) {
    const emails = _loadEmailsFromStorage()
    if (!filterBy) return Promise.resolve(emails)
    const filteredCars = _getFilteredEmails(emails, filterBy)
    return Promise.resolve(filteredCars)
}




function _addEmail(emailToSave) {

    let emails = _loadEmailsFromStorage()
    let email = _createEmail(emailToSave)
    emails = [email, ...emails]
    _saveEmailsToStorage(emails)
    return Promise.resolve()
}

function getEmailById(emailId) {
    let emails = _loadEmailsFromStorage()
    const email = emails.find(email => email.id === emailId)
    return Promise.resolve(email)
}

// function _getFilteredEmails(emails, filterBy) {
//     let { vendor, minSpeed, maxSpeed } = filterBy
//     minSpeed = minSpeed ? minSpeed : 0
//     maxSpeed = maxSpeed ? maxSpeed : Infinity
//     return emails.filter(car => {
//         return car.vendor.includes(vendor) && car.speed >= minSpeed && car.speed <= maxSpeed
//     })
// }

function _createEmail(emailToSave) {
    return {
        id: utilService.makeId(),
        subject: emailToSave.subject,
        body: emailToSave.body,
        status: 'sent',
        isRead: 'true',
        isStared: 'false',
        labels: [],
        sentAt: Date.now(),
        from: loggedInUser.email,
        to: emailToSave.toUser,
    }
}

function _createEmails() {
    var emails = _loadEmailsFromStorage()
    if (!emails || !emails.length) {
        emails = []
        for (var i = 0; i < 10; i++) {
            var email = {
                id: utilService.makeId(),
                subject: 'Miss you!',
                body: 'Would love to catch up sometimes',
                isRead: false,
                sentAt: 1551133930594,
                to: 'momo@momo.com'
            }
            emails.push(email)


        }

    }
    _saveEmailsToStorage(emails);
}

function removeEmail(emailId) {
    let emails = _loadEmailsFromStorage()
    emails = emails.filter(email => email.id !== emailId)
    _saveEmailsToStorage(emails);
    return Promise.resolve()
}


function markedAsRead(emailId) {
    const emails = _loadEmailsFromStorage();

    emails.forEach(email => {
        if (emailId.id === email.id) email.isRead = true
        return email;
    });
    // var email = emails.find((email) => {
    //     return emailId.id === email.id;
    // });
    email.isRead = true;
    _saveEmailsToStorage(emails);
    return Promise.resolve(email);
}


function _saveEmailsToStorage(emails) {
    storageService.saveToStorage(KEY, emails)
}

function _loadEmailsFromStorage() {
    return storageService.loadFromStorage(KEY)
}