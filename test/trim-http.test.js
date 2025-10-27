import { describe, it, expect } from 'vitest';
import trimHttp from './src/index.js';

describe('trimHttp', () => {
    it('removes https:// prefix', () => {
        expect(trimHttp('https://example.com')).toBe('example.com');
    });

    it('removes http:// prefix', () => {
        expect(trimHttp('http://example.com')).toBe('example.com');
    });

    it('leaves non-HTTP URLs intact', () => {
        expect(trimHttp('ftp://example.com')).toBe('ftp://example.com');
        expect(trimHttp('file:///path/to/file')).toBe('file:///path/to/file');
    });

    it('returns input unchanged for short strings', () => {
        expect(trimHttp('http')).toBe('http');
    });

    it('handles non-string values safely', () => {
        expect(trimHttp(null)).toBe(null);
        expect(trimHttp(undefined)).toBe(undefined);
        expect(trimHttp(123)).toBe(123);
        expect(trimHttp({})).toEqual({});
    });

    it('returns the same string if there is no protocol', () => {
        expect(trimHttp('example.com')).toBe('example.com');
        expect(trimHttp('www.example.com')).toBe('www.example.com');
    });
});
