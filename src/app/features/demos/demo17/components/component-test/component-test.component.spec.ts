import { ComponentFixture, TestBed } from "@angular/core/testing"
import { ComponentTestComponent } from "./component-test.component"
import { UserService } from "../../tools/my-service.service"
import { StudentUserListComponent } from "../../../../exercices/http-client/components/student/user-list/user-list.component"


describe('ComponentTestComponent', () => {
    let component: ComponentTestComponent
    let fixture: ComponentFixture<ComponentTestComponent>
    let userService: UserService

    beforeEach(() => {
        const userServiceMock = {
            getUsers: () => [
                { id: 1, name: 'Mauritcio' },
                { id: 2, name: 'Thomas' },
                { id: 3, name: 'Patrick Bruel' }
            ]
        };
    
        TestBed.configureTestingModule({
            declarations: [ComponentTestComponent],
            providers: [
                { provide: UserService, useValue: userServiceMock }
            ]
        });
    
        fixture = TestBed.createComponent(ComponentTestComponent);
        component = fixture.componentInstance;
        userService = TestBed.inject(UserService);
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy()
    })

    it("should display a list of users", () => {
        const compiled = fixture.nativeElement
        const userListItems = compiled.querySelectorAll("li")
        expect(userListItems.length).toBe(3)
        expect(userListItems[0].textContent).toContain('Mauritcio');
        expect(userListItems[1].textContent).toContain('Thomas');
        expect(userListItems[2].textContent).toContain('Patrick Bruel');
    })
})