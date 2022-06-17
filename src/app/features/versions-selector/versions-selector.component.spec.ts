import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VersionsSelectorComponent } from './versions-selector.component';

describe('VersionsSelectorComponent', () => {
  let component: VersionsSelectorComponent;
  let fixture: ComponentFixture<VersionsSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VersionsSelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VersionsSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
