import {ChangeDetectionStrategy, Component} from '@angular/core';

interface User {
    readonly name: string;
    readonly status: 'загружен' | 'отсутствует';
    readonly tags: readonly string[];
}

@Component({
    selector: `my-app`,
    templateUrl: `./app.component.html`,
    styleUrls: ["./app.component.less"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
    readonly columns = [`name`, 'status', 'tags', `actions`];

    users: readonly User[] = [
        {
            name: `Вебинар_0001___ОТ12:00:00[данные пришли с Bizon date_stamp_bizon] `,
            
            status: `загружен`,
            tags: [`важно`],
        },
        {
            name: `Вебинар_0002___ОТ12:00:00[данные пришли с Bizon date_stamp_bizon]`,
            
            status: `загружен`,
            tags: [ `проверить`],
        },
        {
            name: `Вебинар_0003___ОТ12:00:00[данные пришли с Bizon date_stamp_bizon]`,
            
            status: `загружен`,
            tags: [`важно`],
        },
        {
            name: `Вебинар_0004___ОТ12:00:00[данные пришли с Bizon date_stamp_bizon]`,
            
            status: `отсутствует`,
            tags: [`важно`],
        },
        {
            name: `Вебинар_0005___ОТ12:00:00[данные пришли с Bizon date_stamp_bizon]`,
            
            status: `загружен`,
            tags: [`свежее`],
        },
        {
            name: `Вебинар_0006___ОТ12:00:00[данные пришли с Bizon date_stamp_bizon]`,
            
            status: `отсутствует`,
            tags: [`свежее`],
        },
    ];

    remove(item: User): void {
        this.users = this.users.filter(user => user !== item);
    }
}
