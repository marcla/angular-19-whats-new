import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-account',
  imports: [],
  template: `
    <p>Username: {{ username }}</p>
    <p>Iniziali: {{ initial }}</p>
    <p>Nome: {{ name }}</p>
    <p>Cognome: {{ lastName }}</p>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountComponent implements OnChanges {
  @Input({
    required: true,
    transform: (value: string | null) => value?.toUpperCase(),
  })
  username!: string;
  name!: string;
  lastName!: string;
  initial!: string;

  ngOnChanges(changes: SimpleChanges): void {
    const [name, lastName] = changes['username'].currentValue.split(' ');

    this.name = name.toLowerCase();
    this.lastName = lastName.toLowerCase();
    this.initial = `${name[0]}${lastName[0]}`.toUpperCase();
  }
}
