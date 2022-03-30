---
hide:
    - navigation

---

# GV/ Basic Rendering

[:octicons-arrow-left-24: Return to Graphics and Visualization](/Knowledge-Notebook/Graphics-Visualization/)

---

This section describes basic rendering and fundamental graphics techniques that nearly every undergraduate course in graphics will cover and that are essential for further study in graphics. Sampling and anti-aliasing are related to the effect of digitization and appear in other areas of computing, for example, in audio sampling.

??? info "Learning outcomes"

    1. Discuss the light transport problem and its relation to numerical integration i.e., light is emitted, scatters
    around the scene, and is measured by the eye. [Familiarity]
    1. Describe the basic graphics pipeline and how forward and backward rendering factor in this. [Familiarity]
    2. Create a program to display 3D models of simple graphics images. [Usage]
    3. Derive linear perspective from similar triangles by converting points (x, y, z) to points (x/z, y/z, 1). [Usage]
    4. Obtain 2-dimensional and 3-dimensional points by applying affine transformations. [Usage]
    5. Apply 3-dimensional coordinate system and the changes required to extend 2D transformation operations to handle transformations in 3D. [Usage]
    6. Contrast forward and backward rendering. [Assessment]
    7. Explain the concept and applications of texture mapping, sampling, and anti-aliasing. [Familiarity]
    8. Explain the ray tracing/rasterization duality for the visibility problem. [Familiarity]
    9.  Implement simple procedures that perform transformation and clipping operations on simple 2-dimensional images. [Usage]
    10. Implement a simple real-time renderer using a rasterization API (e.g., OpenGL) using vertex buffers and shaders. [Usage]
    11. Compare and contrast the different rendering techniques. [Assessment]
    12. Compute space requirements based on resolution and color coding. [Assessment]
    13. Compute time requirements based on refresh rates, rasterization techniques. [Assessment]

## Rendering in nature

, e.g., the emission and scattering of light and its relation to  numerical integration

## Forward and backward rendering

 (i.e., ray-casting and rasterization)

## Polygonal representation

## Basic radiometry, similar triangles, and projection model

## Affine and coordinate system transformations

## Ray tracing

## Visibility and occlusion

including solutions to this problem such as depth buffering, Painter’s algorithm, and ray tracing

## The forward and backward rendering equation

## Simple triangle rasterization

## Rendering with a shader-based API

## Texture mapping

, including minification and magnification (e.g., trilinear MIP-mapping)

## Application of spatial data structures to rendering

## Sampling and anti-aliasing

## Scene graphs and the graphics pipeline
