# Forex Trend Analyzer

A CLI tool that generates market signals for forex pairs using **multi-timeframe confluence**, market structure, momentum, and risk modeling.

## What it does

- Analyzes all pair combinations from your currency list.
- Supports confluence across multiple timeframes (for example: `1h`, `4h`, `1d`).
- Computes indicator stack per timeframe:
  - EMA trend structure,
  - momentum,
  - RSI regime,
  - realized volatility.
- Merges timeframe signals into one directional bias (`bullish`, `bearish`, `sideways`).
- Derives trading zones:
  - support/resistance,
  - TP1 / TP2 (take-profit zones),
  - SL (stop-loss protection),
  - risk/reward ratio.

## Data modes

### 1) API mode (default)
Uses Frankfurter daily rates. In this mode, only `1d` timeframe is supported.

```bash
python3 forex_trend_analyzer.py --currencies USD EUR GBP JPY --timeframes 1d --samples 120 --top 10
```

### 2) CSV mode (recommended for any timeframe)
For intraday or custom timeframes, provide your own OHLC dataset:

```csv
timestamp,pair,timeframe,open,high,low,close
2026-02-01T10:00:00Z,EUR/USD,1h,1.0820,1.0834,1.0812,1.0828
```

```bash
python3 forex_trend_analyzer.py --csv market_data.csv --currencies USD EUR GBP JPY --timeframes 1h 4h 1d --samples 120 --top 12
```

## Options

- `--currencies`: Currency codes used to build all combinations.
- `--timeframes`: List of timeframes to combine (ordered highest priority first).
- `--samples`: Number of latest candles used per timeframe (minimum 20).
- `--top`: Number of strongest outcomes displayed.
- `--csv`: Optional OHLC CSV for custom/intraday timeframe support.

## Important note

This tool improves signal quality with confluence and risk zones, but no system can guarantee zero stop-loss hits in live markets. Use proper position sizing and risk controls.

## Run tests

```bash
python3 -m unittest discover -s tests -p 'test_*.py'
```
