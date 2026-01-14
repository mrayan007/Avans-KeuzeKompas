// Decorators, Classes & Interfaces
import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";

// Services
import { JwtService } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";

// Types
import { Request } from 'express';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private jwtService: JwtService,
    private configService: ConfigService
  ) { }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request);

    if (!token) throw new UnauthorizedException('User not authorized.');

    try {
      const payload = await this.jwtService.verifyAsync(
        token, { secret: this.configService.get('JWT_SECRET') }
      );

      request['sub'] = payload;
    } catch {
      throw new UnauthorizedException('User not authorized.');
    }

    return true;
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}
