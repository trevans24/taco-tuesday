import { HomeComponent } from './home/home.component';
import { FindComponent } from './find/find.component';
import { ListComponent } from './list/list.component';
import { RandomComponent } from './random/random.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		redirectTo: 'home',
		pathMatch: 'full'
	},
	{
		path: 'home',
		component: HomeComponent
	},
	{
		path: 'find',
		component: FindComponent
	},
	{
		path: 'list',
		component: ListComponent
	},
	{
		path: 'random',
		component: RandomComponent
	}
]

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
	providers: []
})

export class AppRoutingModule {}