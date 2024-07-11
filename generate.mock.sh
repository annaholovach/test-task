#!/bin/bash

function rand_range() {
    min=$1
    max=$2
    num=$(( RANDOM % (max - min + 1) + min ))
    echo $num
}

echo '[' > stats.json
for (( i=1; i<=10; i++ )); do
    autoId=$i
    phoneViews=$(rand_range 1 50)
    listingViews=$(rand_range 1 50)
    
    if [[ $i -eq 10 ]]; then
        echo "{\"autoId\": $autoId, \"phoneViews\": $phoneViews, \"listingViews\": $listingViews}" >> stats.json
    else
        echo "{\"autoId\": $autoId, \"phoneViews\": $phoneViews, \"listingViews\": $listingViews}," >> stats.json
    fi
done
echo ']' >> stats.json

echo "Generated 10 objects in stats.json"
