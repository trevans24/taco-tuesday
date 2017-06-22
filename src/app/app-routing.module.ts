// Import Components
import { HomeComponent } from './home/home.component';
import { FindComponent } from './find/find.component';
import { ListComponent } from './list/list.component';
import { RandomComponent } from './random/random.component';
import { CreateComponent } from './create/create.component';
import { ShowComponent } from './show/show.component';

// Import Module and Router From Angular
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Define Routes
const routes: Routes = [
// First one is to redirect any non matching route to home
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
		path: 'create',
		component: CreateComponent
	},
	{
		path: 'list',
		component: ListComponent
	},
	{
		path: 'random',
		component: RandomComponent
	},
	{
		path: ':id',
		component: ShowComponent
	}
];

// NgModule for import and export
@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
	providers: []
})

// Export the Routing Module for the App Component to use
export class AppRoutingModule {}