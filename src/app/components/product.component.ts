import { 
    Component, 
    Input, 
    Output, 
    EventEmitter, 
    OnChanges, 
    SimpleChanges, 
    OnInit, 
    DoCheck, 
    OnDestroy 
} from '@angular/core';

//Models
import { Product } from '../product.model';

//Decorador
@Component({
    selector: 'app-product',
    templateUrl: './product.component.html'
})

// implements OnChanges, OnInit, DoCheck, OnDestroy
export class ProductComponent implements OnChanges, OnInit, DoCheck, OnDestroy {
    
    //Inputs y outputs, handdling and event handler
    @Input() product: Product;
    @Output() productClicked: EventEmitter<any> = new EventEmitter();

    constructor() {
        console.log('1. Constructor')
    }

    ngOnChanges(changes: SimpleChanges) {
        console.log('2. ngOnChanges, compara el estado anterior y el nuevo')
        console.log('changes:',changes)
    }

    ngOnInit(){
        // Usar para hacer llamadas a servicios de datos
        console.log('3. ngOnInit, se ejecuta 1 vez cuando el componente esta puesto en pantalla')
    }

    //Hace lo mismo que ngOnChanges solo que a nuestra manera
    // Al usar ngDoCheck no se puede utilizar ngOnChanges por conflictos
    ngDoCheck(){
        console.log('4. ngDoCheck')
    }

    // Se ejecuta cuando se queta de la interfaz
    ngOnDestroy(){
        console.log('5. ngOnDestory')
    }

    addCart() {
        console.log('Añadir a carrito ...')
        this.productClicked.emit(this.product.id);
    }
}