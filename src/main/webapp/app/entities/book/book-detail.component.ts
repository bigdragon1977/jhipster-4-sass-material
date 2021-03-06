import { Component, OnInit } from '@angular/core';

import { Book } from './book.model';
import { BookService } from './book.service';

import { Transition } from 'ui-router-ng2';

@Component({
    selector: 'jhi-book-detail',
    templateUrl: './book-detail.component.html'
})
export class BookDetailComponent implements OnInit {

    book: Book;

    constructor(private bookService: BookService, private trans: Transition) { }

    ngOnInit() {
        this.load(this.trans.params()['id']);
    }

    load (id) {
        this.bookService.find(id).subscribe(book => {
            this.book = book;
        });
    }

}
