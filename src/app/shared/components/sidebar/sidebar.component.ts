import { Component, OnInit } from '@angular/core';
import { RolBasedHideService } from 'src/app/rol-based-hide.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private rolBasedHideService: RolBasedHideService) { }

  ngOnInit(): void {
    if (this.rolBasedHideService.shouldHide(['WATCHMAN', 'LOCAL_OWNER'])) {
      const elementosParaOcultar: NodeListOf<HTMLElement> = document.querySelectorAll('.RolHiden');
    
      elementosParaOcultar.forEach(elemento => {
        elemento.style.display = 'none';
      });
    }
  }

}
