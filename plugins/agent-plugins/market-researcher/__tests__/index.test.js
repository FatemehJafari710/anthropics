const MarketResearcher = require('../index.js');

describe('MarketResearcher Plugin', () => {
  let researcher;

  beforeEach(() => {
    researcher = new MarketResearcher();
  });

  describe('initialize', () => {
    it('should initialize the plugin successfully', async () => {
      const result = await researcher.initialize();
      expect(result.status).toBe('initialized');
      expect(result.plugin).toBe('market-researcher');
      expect(result.version).toBe('1.0.0');
    });
  });

  describe('analyzeMarketTrends', () => {
    it('should analyze market trends', async () => {
      const result = await researcher.analyzeMarketTrends('technology', {
        timeframe: '2026'
      });
      expect(result.market).toBe('technology');
      expect(result.trends).toBeDefined();
      expect(result.opportunities).toBeDefined();
      expect(result.threats).toBeDefined();
    });
  });

  describe('analyzeCompetitors', () => {
    it('should analyze competitors', async () => {
      const competitors = ['CompA', 'CompB'];
      const result = await researcher.analyzeCompetitors('SaaS', competitors);
      expect(result.industry).toBe('SaaS');
      expect(result.competitors.length).toBe(2);
    });
  });

  describe('getMarketIntelligence', () => {
    it('should retrieve market intelligence', async () => {
      const result = await researcher.getMarketIntelligence('Market size for AI');
      expect(result.query).toBe('Market size for AI');
      expect(result.insights).toBeDefined();
      expect(result.dataPoints).toBeDefined();
    });
  });

  describe('execute', () => {
    it('should execute analyzeTrends action', async () => {
      const result = await researcher.execute('analyzeTrends', {
        market: 'technology'
      });
      expect(result.market).toBe('technology');
    });

    it('should throw error on unknown action', async () => {
      await expect(
        researcher.execute('unknownAction', {})
      ).rejects.toThrow('Unknown action: unknownAction');
    });
  });
});
