import { storageService } from './storage.service'



export const emailService = {
    query,

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

function _getFilteredEmails(emails, filterBy) {
    let { vendor, minSpeed, maxSpeed } = filterBy
    minSpeed = minSpeed ? minSpeed : 0
    maxSpeed = maxSpeed ? maxSpeed : Infinity
    return emails.filter(car => {
        return car.vendor.includes(vendor) && car.speed >= minSpeed && car.speed <= maxSpeed
    })
}


function _createEmails() {
    var emails = _loadEmailsFromStorage()
    if (!emails || !emails.length) {
        emails = []
        for (var i = 0; i < 10; i++) {
            var email = {
                id: 'e10'+i,
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


function _saveEmailsToStorage(emails) {
    storageService.saveToStorage(KEY, emails)
}

function _loadEmailsFromStorage() {
    return storageService.loadFromStorage(KEY)
}
