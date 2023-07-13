import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'student-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() OnSidebarToggle: EventEmitter<void> = new EventEmitter<void>();

  toggleSidebar(){
    this.OnSidebarToggle.emit();
  }
}
