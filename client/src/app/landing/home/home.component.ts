import { Component, OnInit } from "@angular/core";
import { AutorService } from "src/app/services/autor/autor.service";
import { ArticleModel } from "src/app/models/article/ArticleModel";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  constructor(private autorService: AutorService) {}

  ngOnInit() {
    this.getInfo();
  }

  scrollToElement = elementId => {
    document
      .querySelector("#" + elementId)
      .scrollIntoView({ behavior: "smooth", block: "center" });
  };

  articles: ArticleModel[] = [];

  getInfo() {
    this.autorService.GetFileData().subscribe(items => {
      this.articles = items;
    });
  }
}
