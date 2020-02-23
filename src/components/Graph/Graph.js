import React from "react";
import { Group } from "@vx/group";
import { GlyphDot } from "@vx/glyph";
import { LinePath } from "@vx/shape";
import { genDateValue } from "@vx/mock-data";
import { scaleTime, scaleLinear } from "@vx/scale";
import { curveMonotoneX, curveBasis } from "@vx/curve";
import { extent, max } from "d3-array";

const data = genDateValue(15);

const margin = {
  top: 60,
  bottom: 60,
  left: 80,
  right: 80
};

const width = 400;
const height = 600;

const xMax = width - margin.left - margin.right;
const yMax = height - margin.top - margin.bottom;

const x = d => d.date.getTime();
const y = d => d.value;

// scales
const xScale = scaleTime({
  domain: extent(data, x)
});
const yScale = scaleLinear({
  domain: [0, max(data, y)]
});

// colors
const primary = "#8921e0";
const secondary = "#00f2ff";
const contrast = "#ffffff";

export default ({
  width = 800,
  height = 600,
  margin = { top: 60, bottom: 60, left: 80, right: 80 }
}) => {
  // bounds
  const xMax = width - margin.left - margin.right;
  const yMax = height - margin.top - margin.bottom;

  // update scale range to match bounds
  xScale.range([0, xMax]);
  yScale.range([yMax, 0]);

  return (
    <svg width={width} height={height}>
      <rect
        x={0}
        y={0}
        width={width}
        height={height}
        fill={secondary}
        rx={14}
      />
      <Group top={margin.top}>
        <LinePath
          data={data}
          x={x => xScale(x.date.getTime())}
          y={y => yScale(y.value)}
          stroke={primary}
          strokeWidth={3}
          curve={curveMonotoneX}
        />
        {data.map((d, i) => {
          const cx = xScale(x(d));
          const cy = yScale(y(d));

          return (
            <g key={`line-point-${i}`}>
              <GlyphDot
                cx={cx}
                cy={cy}
                r={6}
                fill={contrast}
                stroke={secondary}
                strokeWidth={10}
              />
              <GlyphDot
                cx={cx}
                cy={cy}
                r={6}
                fill={secondary}
                stroke={primary}
                strokeWidth={3}
              />
              <GlyphDot cx={cx} cy={cy} r={4} fill={contrast} />
            </g>
          );
        })}
      </Group>
    </svg>
  );
};
