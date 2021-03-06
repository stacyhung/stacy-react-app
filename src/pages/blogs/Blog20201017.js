import React from "react";
import "../../css/blog.css";

export default function Blog20201017() {
  return (
    <>
      <p>
        I’ve recently had the chance to work on some single-cell RNA-seq
        (scRNAseq) datasets generated with the{" "}
        <a
          href="https://www.10xgenomics.com/products/single-cell-gene-expression"
          target="_blank"
          rel="noreferrer"
          className="within-article-link"
        >
          10X Genomics 3’ assay
        </a>
        . The way I’ve been analyzing this data is by running the UMI counts
        through the `cellranger count` pipeline and loading the resulting
        filtered feature-barcode matrices as input for a Seurat object in R.
      </p>

      <p>
        <a
          href="https://satijalab.org/seurat/"
          target="_blank"
          rel="noreferrer"
          className="within-article-link"
        >
          Seurat
        </a>
        , by the way, is an incredibly well-documented and easy-to-use R package
        designed specifically for scRNAseq analysis. I was intimidated by the
        idea of analyzing single-cell data, but Seurat got me started in no time
        and before I knew it, I was identifying cluster markers and looking at
        how differentially expressed genes could help explain changes seen from
        diagnosis to relapse in Hodgkin’s Lymphoma cases. So cool!
      </p>

      <p>
        One of the unique aspects of Seurat is its approach to batch-correction
        (or “integration” in Seurat’s terms) which uses a combination of
        Canonical Correlation Analysis (conceptually similar to the
        Needleman-Wunsch algorithm) and mutual nearest neighhours (MNN). The
        gist of their approach aims to identify shared cell states that are
        present across different datasets -- these “anchors” allow for the
        transfer information from one dataset to another, resulting in a single
        harmonized reference.
      </p>

      <p>
        Before using Seurat, I wasn’t familiar with any other batch-correction
        methods for scRNAseq, but a colleague pointed out that a{" "}
        <a
          href="https://www.nature.com/articles/nbt.4091?utm_source=feedburner&utm_medium=feed&utm_campaign=Feed%3A+nbt%2Frss%2Fcurrent+%28Nature+Biotechnology+-+Issue%29"
          target="_blank"
          rel="noreferrer"
          className="within-article-link"
        >
          MNN-based approach by Haghverdi <em>et al.</em>
        </a>{" "}
        is fairly commonly used in the field. Since I was still new to the topic
        and wanted to make sure I was using the best method for my analysis, I
        did some research to see if there were any studies comparing the two
        methods, and to see perhaps if even other methods might be more
        suitable.
      </p>

      <p>
        A very comprehensive study by{" "}
        <a
          href="https://genomebiology.biomedcentral.com/articles/10.1186/s13059-019-1850-9"
          target="_blank"
          rel="noreferrer"
          className="within-article-link"
        >
          Tran <em>et al.</em>
        </a>
        was published in Genome Biology earlier this year, and examines the
        performance of 14 scRNAseq batch-correction methods applied to 10
        datasets. The study looks at diverse scenarios, including combining
        batches with: identical cell types but different technologies,
        non-identical cell types, more than two batches, “big data” and
        simulated data. No one tool was the winner, but Seurat3, Harmony and
        LIGER performed consistently well across the majority of datasets.
      </p>

      <p>
        So I continued using Seurat for all my analyses and felt good about it.
        Eventually, I started to examine individual genes exhibiting significant
        changes in expression between groups of interest (i.e. diagnosis vs.
        relapse cases), when I came across <i>JUND</i>, a proto-oncogene that
        appeared to be highly expressed at relapse but very lowly expressed at
        diagnosis. Surprisingly, the expression pattern was similar across all
        clusters and thus could not be linked to a given cell type. This didn’t
        make sense biologically since such extreme changes in gene expression
        would need to come from a specific immunophenotype and not all the
        cells.
      </p>

      <p>
        I then looked at expression of <i>JUND</i> at the sample level, and
        noticed that in addition to all of the diagnostic samples, a handful of
        the relapse samples were not expressing <i>JUND</i>. When I presented
        these results to my lab, the technician who runs the sequencing
        experiments, recalled these samples were prepared using an older version
        of the 3’ assay (V2). Indeed, the 10X website shows data indicating that
        their 3’ V3 assay results in increased UMI counts and numbers of genes
        per cell compared to their 3’ V2 assay, which I confirmed with my own
        data.
      </p>

      <h3>
        <em>
          So what’s the best way to correct for differences in chemistry, and
          how can one account for gene dropouts?
        </em>
      </h3>

      <p>
        Well, I already knew the first part of the answer (batch-correction),
        but I wasn’t sure how to address the gene drop out problem, which
        unaccounted for, would inevitably skew my differential expression
        analyses. I went on a call with my team to discuss this issue with 10X,
        and discovered they have exactly a solution for us:{" "}
        <a
          href="https://support.10xgenomics.com/single-cell-gene-expression/software/pipelines/latest/using/aggregate"
          target="_blank"
          rel="noreferrer"
          className="within-article-link"
        >
          Aggregating Libraries With Different Chemistry Versions
        </a>
        ... Or did they?
      </p>

      <p>
        The `cellranger aggr` pipeline, by default, aggregates outputs from
        multiple runs of the cellranger count pipeline by sub-sampling reads
        from higher-depth cells until all cells on average have an equal numbers
        of cells. This is essentially 10X’s way of normalizing the data for
        sequencing depth, but is not ideal since a potentially large amount of
        data is discarded right off the bat. The alternative normalization
        approach (e.g. in Seurat) fits a model (e.g. regularized negative
        binomial regression) to the UMI counts. Thus, a transformation is
        applied to the data instead of physically removing the reads.
      </p>

      <p>
        In addition to normalization, the `aggr` pipeline can carry out an
        additional but optional step that corrects for different chemistry
        versions given batch information. Here, batches are referring to the
        libraries sequenced with the same assay version. While I was already a
        little skeptical of using this approach since the normalization step
        throws away potentially valuable data, the 10X representative made me
        even more doubtful by showing me “before” and “after” UMAP
        visualizations that were less-than-convincing. She also noted that the
        batch-correction step is only designed for combining V2 and V3
        chemistries, and not intended to discern batch effects between different
        runs. Noneless, I kept an open mind.
      </p>

      <p>
        After our call, I read through all the documentation on this topic, and
        was surprised to learn that the batch-correction method specifically
        designed for combining V2 and V3 chemistries was the MNN approach. As
        you may recall, this was the same method I mentioned earlier that is
        commonly used for batch-correction in scRNAseq analysis. Wait a second…
        so correcting for different chemistries just means I can correct for
        different batches? This actually makes a lot of sense, since a batch
        needs to be prepared with the same chemistry, so in reality I was
        already indirectly correcting for the chemistries by correcting for
        technical batches.
      </p>

      <h3>There are a few takeaway messages here:</h3>

      <ol>
        <li>
          To correct for differences in chemistry between batches, you can use
          your favourite batch-correction method. You don’t and probably
          shouldn’t have to use 10X’s aggr pipeline since you’ll lose lots of
          reads, and the correction step won’t be that good (MNN doesn’t perform
          that well compared to a number of other scRNAseq batch correction
          methods).
        </li>
        <li>
          Once you’ve corrected for different chemistry versions (and batches),
          you’re still going to see gene dropouts. This is actually a major
          unsolved problem in scRNAseq analyses, but there are a few approaches
          that might help:
          <ul>
            <li>
              <a
                href="https://www.nature.com/articles/s41467-018-03405-7"
                target="_blank"
                rel="noreferrer"
                className="within-article-link"
              >
                An accurate and robust imputation method scImpute for
                single-cell RNA-seq data
              </a>
            </li>

            <li>
              <a
                href="https://www.biorxiv.org/content/10.1101/731638v1.full"
                target="_blank"
                rel="noreferrer"
                className="within-article-link"
              >
                scDoc: Correcting Drop-out Events in Single-cell RNA-seq Data
              </a>
            </li>

            <li>
              <a
                href="https://www.nature.com/articles/s41467-020-14976-9"
                target="_blank"
                rel="noreferrer"
                className="within-article-link"
              >
                Embracing the dropouts in single-cell RNA-seq analysis
              </a>
            </li>
          </ul>
        </li>
        <li>
          Do your homework! Companies love promoting their products, even if it
          may not be the right solution for (but they will make it sound like it
          is). By doing my research, I saved myself from re-doing all my
          analyses with a worse pipeline and would probably end up being even
          more confused than when I started.
        </li>
      </ol>
    </>
  );
}
