#!/bin/bash

echo "Optimizing images for web..."

# Optimize JPEG images - resize to max 1200px width, 85% quality
for img in *.jpeg *.jpg; do
    if [ -f "$img" ]; then
        echo "Optimizing $img..."
        convert "$img" -resize "1200x1200>" -quality 85 -strip "$img"
    fi
done

# Optimize PNG images - resize to max 800px width for logos
for img in *.png; do
    if [ -f "$img" ]; then
        echo "Optimizing $img..."
        convert "$img" -resize "800x800>" -strip "$img"
    fi
done

echo "Image optimization complete!"
echo "New file sizes:"
ls -lh *.jpeg *.jpg *.png

