import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

interface Node extends d3.SimulationNodeDatum {
  id: string;
  url?: string;
  color?: string;
  radius?: number;
  label?: string;
}

interface Link extends d3.SimulationLinkDatum<Node> {
  source: string | Node;
  target: string | Node;
}

interface PhysicsGraphProps {
  nodes: Node[];
  links: Link[];
  centralNodeId: string;
  nodeColor?: string;
  linkColor?: string;
  hoverColor?: string;
  textColor?: string;
  textOpacity?: number;
  isDay: boolean;
}

const PhysicsGraph: React.FC<PhysicsGraphProps> = ({
  nodes,
  links,
  centralNodeId,
  nodeColor = 'fill-primary',
  linkColor = 'stroke-primary',
  hoverColor = 'stroke-tertiary',
  textColor = 'fill-primary text-lg font-bold',
  textOpacity = 0.15,
  isDay,
}) => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();

    const width = window.innerWidth;
    const height = window.innerHeight;

    const simulation = d3.forceSimulation(nodes as d3.SimulationNodeDatum[])
      .force('link', d3.forceLink(links).id((d: any) => d.id).distance(200))
      .force('charge', d3.forceManyBody().strength(-500))
      .force('center', d3.forceCenter(width / 2, height / 2));

    const link = svg.append('g')
      .attr('class', 'links')
      .selectAll('line')
      .data(links)
      .enter()
      .append('line')
      .attr('class', linkColor);

    const node = svg.append('g')
      .attr('class', 'nodes')
      .selectAll('circle')
      .data(nodes)
      .enter()
      .append('circle')
      .attr('r', (d: any) => d.radius || (d.id === centralNodeId ? 30 : 20))
      .attr('class', nodeColor)


      .on('mouseover', function (event, d) {
        d3.select(this)
        .attr('class', `${hoverColor} ${nodeColor}`)
        .attr('stroke-width', 3)

        
        d3.select(`#text-${d.id}`)
          .attr('opacity', 1);
        
        d3.selectAll('.links line')
          .attr('class', hoverColor)
          .attr('stroke', hoverColor);

        d3.selectAll('circle')
          .filter((n: any) => n.id !== d.id)

          .attr('class', 'fill-tertiary')
          .attr('opacity', 1);

        d3.selectAll('text')
          .filter((n: any) => n.id !== d.id)
          .attr('opacity', 0);
      })
      .on('mouseout', function (event, d) {
        d3.select(this)
          .attr('class', nodeColor)
          .attr('stroke-width', 0);
        
        d3.select(`#text-${d.id}`)
          .attr('opacity', textOpacity);

        d3.selectAll('.links line')
          .attr('class', linkColor)

        d3.selectAll('circle')
          .filter((n: any) => n.id !== d.id)
          .attr('class', (n: any) => n.color || nodeColor)
          .attr('opacity', 1);

        d3.selectAll('text')
          .filter((n: any) => n.id !== d.id)
          .attr('opacity', textOpacity);
      })
      .on('click', function (event, d: any) {
        if (d.url) window.location.href = d.url;
      })
      .call(d3.drag<SVGCircleElement, Node>()
        .on('start', (event: any, d: Node) => dragstarted(event, d))
        .on('drag', (event: any, d: Node) => dragged(event, d))
        .on('end', (event: any, d: Node) => dragended(event, d))
      );
    const text = svg.append('g')
      .attr('class', 'texts')
      .selectAll('text')
      .data(nodes)
      .enter()
      .append('text')
      .attr('id', (d: any) => `text-${d.id}`)
      .attr('dx', (d: any) => (d.radius || (d.id === centralNodeId ? 30 : 20)) + 5)
      .attr('dy', 4)
      .attr('opacity', textOpacity)
      .attr('class', 'text-lg font-bold')
      .attr('class', textColor)
      .text((d: any) => d.label || d.id)
      .on('click', function (event, d: any) {
        if (d.url) window.location.href = d.url;
      });

    simulation.on('tick', () => {
      link
        .attr('x1', (d: any) => (d.source as any).x)
        .attr('y1', (d: any) => (d.source as any).y)
        .attr('x2', (d: any) => (d.target as any).x)
        .attr('y2', (d: any) => (d.target as any).y);

      node
        .attr('cx', (d: any) => d.x)
        .attr('cy', (d: any) => d.y);

      text
        .attr('x', (d: any) => d.x)
        .attr('y', (d: any) => d.y);
    });

    d3.interval(() => {
      nodes.forEach((node) => {
        node.x! += Math.sin(Date.now() / 1000) * 2;
        node.y! += Math.cos(Date.now() / 1000) * 2;
      });
      simulation.alpha(0.3).restart();
    }, 100);

    function dragstarted(event: any, d: Node) {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      d.fx = d.x;
      d.fy = d.y;
    }

    function dragged(event: any, d: Node) {
      d.fx = event.x;
      d.fy = event.y;
    }

    function dragended(event: any, d: Node) {
      if (!event.active) simulation.alphaTarget(0);
      d.fx = null;
      d.fy = null;
    }
  }, [nodes, links, centralNodeId, nodeColor, linkColor,textColor, hoverColor, textOpacity, isDay]);

  return (
    <svg ref={svgRef} width="100%" height="100vh" style={{ backgroundColor: 'transparent' }}>
      <g className="nodes"></g>
      <g className="links"></g>
    </svg>
  );
};

export default PhysicsGraph;
