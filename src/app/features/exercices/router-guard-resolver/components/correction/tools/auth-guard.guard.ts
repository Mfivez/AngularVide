import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CorrectionFakeAuthService } from './fake-auth.service';

export const correctionAuthGuardGuard: CanActivateFn = (route, state) => {
  return false
};