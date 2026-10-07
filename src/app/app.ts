import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';

export interface GalleryItem {
  id: string;
  tag: string;
  title: string;
  desc: string;
  image: string;
}

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-root',
  imports: [MatIconModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  readonly activeTab = signal<'inicio' | 'servicios' | 'galeria' | 'contacto'>('inicio');

  readonly selectedGalleryItem = signal<GalleryItem | null>(null);

  readonly galleryItems: GalleryItem[] = [
    {
      id: 'fachada',
      tag: 'Instalaciones',
      title: 'Fachada y Edificio Principal',
      desc: 'Chalet residencial adaptado en una zona tranquila de Dos Hermanas, con amplias zonas de acceso y luz natural.',
      image: 'images/Residencia7.png'
    },
    {
      id: 'terraza',
      tag: 'Exteriores',
      title: 'Patio y Terraza Exterior',
      desc: 'Espacio al aire libre con mesas, sombrillas y balancín para pasear, descansar y disfrutar del buen tiempo con total seguridad.',
      image: 'images/Residencia1.png'
    },
    {
      id: 'habitaciones',
      tag: 'Alojamiento',
      title: 'Habitaciones Confort',
      desc: 'Dormitorios exteriores e iluminados con camas confortables, climatización individual y timbre de aviso para el descanso y la tranquilidad.',
      image: 'images/Residencia2.png'
    },
    {
      id: 'sala-estar',
      tag: 'Zonas Comunes',
      title: 'Sala de Estar y Visitas',
      desc: 'Espacio cálido y luminoso con sillones orejeros adaptados, pensado para el encuentro familiar, la atención personalizada y la lectura.',
      image: 'images/Residencia3.png'
    },
    {
      id: 'rincon-descanso',
      tag: 'Zonas Comunes',
      title: 'Rincón de Descanso',
      desc: 'Zonas interiores acondicionadas con butacas ergonómicas y luz natural para favorecer el sosiego y pausas relajantes.',
      image: 'images/Residencia4.png'
    },
    {
      id: 'pasillos',
      tag: 'Accesibilidad',
      title: 'Pasillos y Accesibilidad',
      desc: 'Entorno totalmente adaptado sin barreras arquitectónicas, dotado de pasamanos continuos de apoyo y una agradable ambientación.',
      image: 'images/Residencia5.png'
    }
  ];

  showTab(tab: 'inicio' | 'servicios' | 'galeria' | 'contacto'): void {
    this.activeTab.set(tab);
    if (typeof window !== 'undefined') {
      window.scrollTo({top: 0, behavior: 'smooth'});
    }
  }

  openGalleryItem(item: GalleryItem): void {
    this.selectedGalleryItem.set(item);
  }

  closeGalleryModal(): void {
    this.selectedGalleryItem.set(null);
  }
}
