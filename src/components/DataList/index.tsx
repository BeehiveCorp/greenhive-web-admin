import React from 'react';

type DataListProps = {
  header: { key: string; label: string }[];
  data: Record<string, string | number>[];
  columnWidths: string[];
};

import './styles.scss';

const DataList: React.FC<DataListProps> = ({ header, data, columnWidths }) => {
  const defaultColumnWidth = `calc(100% / ${header.length})`;

  return (
    <div className="data-list">
      <div className="data-list-header">
        {header.map((col, colIndex) => (
          <div
            key={col.key}
            className="data-list-header-item"
            style={{
              width: columnWidths[colIndex] || defaultColumnWidth,
            }}
          >
            {col.label}
          </div>
        ))}
      </div>

      {data.map((row, rowIndex) => (
        <div key={rowIndex} className="data-list-row">
          {header.map((col, idx) => (
            <div
              key={col.key}
              className="data-list-row-cell"
              style={{ width: columnWidths[idx] || defaultColumnWidth }}
            >
              {row[col.key]}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export { DataList };
