import { Component } from '@angular/core';
import { LoaderService } from '../../services/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css'],
})
export class LoaderComponent {
  isLoading: boolean = false;
  constructor(private loaderService: LoaderService) {}

  ngOnInit() {
    this.loaderService.getLoaderState().subscribe((isLoading: boolean) => {
      console.log("loadin", isLoading);
      
      this.isLoading = isLoading;
    });
  }
}