import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from "@angular/router";
import { ProductRepository } from "./model/product.repository";
import { StoreComponent } from "./store/store/store.component";

@Injectable()
export class StoreFirstGuard {
    private firstNavigation = true;

    constructor(private router: Router){}

    canActivate(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean {
            if (this.firstNavigation) {
                this.firstNavigation = false;
                if (route.component != StoreComponent) {
                    this.router.navigateByUrl('/');
                    return false;
                }
            }
            return true;
        }
}