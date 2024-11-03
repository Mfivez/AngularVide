import { TestBed } from "@angular/core/testing"
import { UserService } from "./my-service.service"

describe('UserService', () => {
    let service: UserService

    beforeEach( () => {
        TestBed.configureTestingModule({})
        service = TestBed.inject(UserService)
    })

    it("should be created", () => {
        expect(service).toBeTruthy
    })

    it("should return a list of users", () => {
        const users = service.getUsers()
        expect(users.length).toBe(3)
        expect(users).toEqual([
            { id: 1, name: 'Mauritcio' },
            { id: 2, name: 'Thomas' },
            { id: 3, name: 'Patrick Bruel' }
        ])
    })
})