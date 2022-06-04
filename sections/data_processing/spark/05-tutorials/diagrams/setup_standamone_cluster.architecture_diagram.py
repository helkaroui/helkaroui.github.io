#!/usr/bin/env python3.6

# diagram.py
from diagrams import Cluster, Diagram
from diagrams.generic.virtualization import Virtualbox
from diagrams.onprem.analytics import Spark

def print_diagram():
    with Diagram(filename="setup_standamone_cluster.architecture_diagram", show=True):
        master = Spark("master\n10.11.13.10")

        with Cluster("Workers"):
            workers_group = [Spark("worker-1\n10.11.13.11"), Spark("worker-2\n10.11.13.12")]

        master >> workers_group

if __name__ == "__main__":
    print_diagram()
