describe('LocalSavePurchases', () => {
    it('should not delete sut.init', () => {
        const cacheStorage = new CacheStorages();
        const sut = new LocalSavePurchases(cacheStorage);

        expect(cacheStorage.deleteCallsCount).toBe(0);
    });
});

class CacheStorages {
    deleteCallsCount = 0;
}
class LocalSavePurchases {
    constructor(private readonly cacheStorage: CacheStorages){}
}