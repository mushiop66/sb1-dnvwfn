import { EventData, Page } from '@nativescript/core';
import { EventsListViewModel } from './events-list-view-model';

export function onNavigatingTo(args: EventData) {
  const page = <Page>args.object;
  page.bindingContext = new EventsListViewModel();
}

export function onEventTap(args: EventData) {
  const viewModel = args.object.bindingContext;
  viewModel.onEventTap(args);
}

export function onFilterTap(args: EventData) {
  const viewModel = args.object.bindingContext;
  viewModel.showFilters();
}

export function onSearch(args: EventData) {
  const viewModel = args.object.bindingContext;
  viewModel.performSearch(args);
}

export function onClear(args: EventData) {
  const viewModel = args.object.bindingContext;
  viewModel.clearSearch();
}