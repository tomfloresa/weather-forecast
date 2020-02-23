import React from "react";
import { Group } from "@vx/group";
import { GlyphDot } from "@vx/glyph";
import { LinePath } from "@vx/shape";
import { genDateValue } from "@vx/mock-data";
import { scaleTime, scaleLinear } from "@vx/scale";
import { curveMonotoneX, curveBasis } from "@vx/curve";
import { extent, max } from "d3-array";

const x = d => d.dt;
const y = d => d.main.temp;

// colors
const primary = "#ffffff";
const secondary = "#0077ff";
const contrast = "#ffffff";

const Graph = ({
  parentWidth,
  parentHeight,
  margin = { top: 20, bottom: 20, left: 20, right: 20 },
  forecasts
}) => {
  // bounds
  const xMax = parentWidth;
  const yMax = parentHeight;

  // scales
  const xScale = scaleTime({
    domain: extent(forecasts, x)
  });
  const yScale = scaleLinear({
    domain: [0, max(forecasts, y)]
  });

  // update scale range to match bounds
  xScale.range([0, xMax]);
  yScale.range([yMax, 0]);

  return (
    <svg width={parentWidth} height={parentHeight}>
      <rect
        x={0}
        y={0}
        width={parentWidth}
        height={parentHeight}
        fill={secondary}
        rx={14}
      />
      <Group top={margin.top}>
        <LinePath
          data={forecasts}
          x={x => xScale(x.dt)}
          y={y => yScale(y.main.temp)}
          stroke={primary}
          strokeWidth={3}
          curve={curveMonotoneX}
        />
        {forecasts.map((d, i) => {
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

export default Graph;
