import { TestBed } from '@angular/core/testing';

import { FoodItemCrudService } from './food-item-crud.service';

describe('FoodItemCrudService', () => {
  let service: FoodItemCrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoodItemCrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
